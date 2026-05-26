import CommentEditor from '@/components/comment/comment-editor'
import CommentList from '@/components/comment/comment-list'
import PostItem from '@/components/post/post-item'
import { Navigate, useParams } from 'react-router'

export default function PostDetailPage() {
  const params = useParams()
  const postId = params.postId

  if (!postId) return <Navigate to={'/'} />

  return (
    <div className="flex flex-col gap-5">
      <h2 className="sr-only">포스트 상세페이지</h2>
      <PostItem postId={Number(postId)} type={'DETAIL'} />
      <h3 className="text-xl font-bold">댓글</h3>
      <CommentEditor postId={Number(postId)} type="CREATE" />
      <CommentList postId={Number(postId)} />
    </div>
  )
}
