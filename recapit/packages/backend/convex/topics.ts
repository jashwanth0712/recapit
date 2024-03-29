import { mutation, query } from './_generated/server';
import { v } from 'convex/values';
import { internal } from '../convex/_generated/api';
import { Auth } from 'convex/server';
export const getUserId = async (ctx: { auth: Auth }) => {
    return (await ctx.auth.getUserIdentity())?.subject;
  };

// Get all notes for a specific user
export const getAllTopics = query({
    args: {},
    handler: async (ctx) => {
      const userId = await getUserId(ctx);
      if (!userId) return null;
  
      const topics = await ctx.db
        .query('topics')
        .collect();
      return topics;
    },
});

  