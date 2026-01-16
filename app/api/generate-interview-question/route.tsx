import { NextRequest, NextResponse } from "next/server";
import ImageKit from "imagekit";
import axios from "axios";
import { aj } from "@/util/arcjet";
import { currentUser } from "@clerk/nextjs/server";

export const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_URL_PUBLIC_KEY!,
    privateKey: process.env.IMAGEKIT_URL_PRIVATE_KEY!,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT!,
});

export async function POST(req: NextRequest) {

    try {
        const user=await currentUser()
        const formData = await req.formData();
        const file = formData.get("file") as File;
        const jobTitle = formData.get("jobTitle") as File;
        const jobDescription = formData.get("jobDescription") as File;

        const decision = await aj.protect(req, {userId:user?.primaryEmailAddress?.emailAddress??'',requested: 5})
        console.log("Arcjet decision", decision);


        //@ts-ignore
        if(decision?.reason?.remaining == 0){
            return NextResponse.json({
                status:429,
                result:'No free credit left, Try again after 24 hours'
            })
        }

        if (file) {



            console.log("file", formData)

            const arrayBuffer = await file.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);

            const uploadPdf = await imagekit.upload({
                file: buffer,
                fileName: file.name || `upload-${Date.now()}.pdf`,
                isPrivateFile: false,
                useUniqueFileName: true
            });



            const result = await axios.post('http://localhost:5678/webhook/generate-interview-question', {
                resumeUrl: uploadPdf?.url
            });
            console.log(result.data)


            return NextResponse.json({
                questions: result.data?.message?.content?.questions,
                resumeUrl: uploadPdf?.url,
                status:200
            })
        }
        else {
            const result = await axios.post('http://localhost:5678/webhook/generate-interview-question', {
                resumeUrl: null,
                jobTitle: jobTitle,
                jobDescription: jobDescription,
            });
            console.log(result.data)


            return NextResponse.json({
                questions: result.data?.message?.content?.questions,
                resumeUrl: null
            })
        }

    }
    catch (error: any) {
        console.error('Upload error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}