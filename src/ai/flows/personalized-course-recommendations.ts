'use server';

/**
 * @fileOverview A personalized course recommendation AI agent.
 *
 * - personalizedCourseRecommendations - A function that handles the course recommendation process.
 * - PersonalizedCourseRecommendationsInput - The input type for the personalizedCourseRecommendations function.
 * - PersonalizedCourseRecommendationsOutput - The return type for the personalizedCourseRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedCourseRecommendationsInputSchema = z.object({
  userProfile: z
    .string()
    .describe('The profile of the user, including their interests and experience.'),
  learningHistory: z
    .string()
    .describe('The learning history of the user, including courses taken and grades.'),
  courseCatalog: z
    .string()
    .describe('The course catalog, including course descriptions and categories.'),
});
export type PersonalizedCourseRecommendationsInput = z.infer<
  typeof PersonalizedCourseRecommendationsInputSchema
>;

const PersonalizedCourseRecommendationsOutputSchema = z.object({
  recommendedCourses: z
    .string()
    .describe('A list of recommended courses based on the user profile and learning history.'),
});
export type PersonalizedCourseRecommendationsOutput = z.infer<
  typeof PersonalizedCourseRecommendationsOutputSchema
>;

export async function personalizedCourseRecommendations(
  input: PersonalizedCourseRecommendationsInput
): Promise<PersonalizedCourseRecommendationsOutput> {
  return personalizedCourseRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedCourseRecommendationsPrompt',
  input: {schema: PersonalizedCourseRecommendationsInputSchema},
  output: {schema: PersonalizedCourseRecommendationsOutputSchema},
  prompt: `You are a course recommendation expert. Based on the user's profile, learning history, and the course catalog, recommend the most relevant courses to the user.

User Profile: {{{userProfile}}}
Learning History: {{{learningHistory}}}
Course Catalog: {{{courseCatalog}}}

Recommended Courses:`,
});

const personalizedCourseRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedCourseRecommendationsFlow',
    inputSchema: PersonalizedCourseRecommendationsInputSchema,
    outputSchema: PersonalizedCourseRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
