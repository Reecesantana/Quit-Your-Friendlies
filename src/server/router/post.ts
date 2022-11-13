import { createPostSchema, getSinglePostSchema } from '../../schema/post.schema'
import * as trpc from '@trpc/server'
import { createRouter } from './context'
import { string } from 'zod'

export const postRouter = createRouter()
	.mutation('create-post', {
		input: createPostSchema,
		async resolve({ ctx, input }) {
			if (!ctx.session) {
				throw new trpc.TRPCError({
					code: 'FORBIDDEN',
					message: 'Can not create a post while logged out',
				})
			}

			const post = await ctx.prisma.post.create({
				data: {
					...input,
					user: {
						connect: {
							id: ctx.session?.user?.id,
						},
					},
				},
			})

			return post
		},
	})
	.query('posts', {
		resolve({ ctx }) {
			return ctx.prisma.post.findMany()
		},
	})
	.query('postById', {
		input: String,
		async resolve({ input, ctx }) {
			const singlePost = await ctx.prisma.post.findUnique({
				where: {
					id: input,
				},
			})
			return singlePost
		},
	})
