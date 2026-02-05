import { useCommentsData } from '@/hooks/queries/use-comments-data'
import CommentItem from './comment-item'
import Fallback from '../fallback'
import Loader from '../loader'
import type { Comment, NestedComment } from '@/types'

function toNestedComments(comments: Comment[]): NestedComment[] {
  const result: NestedComment[] = []

  comments.forEach(comment => {
    if (!comment.root_comment_id) {
      result.push({ ...comment, children: [] })
    } else {
      const rootCommentId = result.findIndex(
        item => item.id === comment.root_comment_id
      )

      const parentComment = comments.find(
        item => item.id === comment.parent_comment_id
      )

      if (rootCommentId === -1) return
      if (!parentComment) return

      result[rootCommentId].children.push({
        ...comment,
        children: [],
        parentComment
      })
    }
  })

  return result
}

export default function CommentList({ postId }: { postId: number }) {
  const {
    data: comments,
    error: fetchCommentsError,
    isPending: isFetchCommentsPending
  } = useCommentsData(postId)

  if (fetchCommentsError) return <Fallback />
  if (isFetchCommentsPending) return <Loader />

  const nestedComments = toNestedComments(comments)

  return (
    <div className="flex flex-col gap-5">
      {nestedComments.map(comment => (
        <CommentItem key={comment.id} {...comment} />
      ))}
    </div>
  )
}
