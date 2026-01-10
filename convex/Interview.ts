import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const SaveInterviewQuestion = mutation({
    args:{
        question:v.any(),
        uid:v.id('UserTable'),
        resumeUrl:v.string()
    },
    handler:async(ctx,args)=>{
        const result = await ctx.db.insert('InterviewSessionTable',{
            interviewQuestion:args.question,
            resumeUrl:args.resumeUrl,
            userId:args.uid,
            status:'draft'
        })
    }
})