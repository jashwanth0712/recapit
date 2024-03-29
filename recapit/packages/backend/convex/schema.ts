import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  notes: defineTable({
    userId: v.string(),
    title: v.string(),
    content: v.string(),
    summary: v.optional(v.string()),
  }),
  topics: defineTable({
    subTopics: v.array(v.string()),
    topicName: v.string(),
  }),
  userSelectedTopics: defineTable({
    subTopic: v.string(),
    topicId: v.id("topics"),
    userId: v.string(),
  }),
});
