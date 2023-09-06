import {Component} from 'react'

import {v4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    nameInput: '',
    commentInput: '',
    commentsList: [],
  }

  deleteComment = () => {
    const {commentsList} = this.state

    this.setState({
      commentsList: commentsList.filter(comment => comment.id !== commentId),
    })
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  renderCommentsList = () => {
    const {commentsList} = this.state

    return commentsList.map(eachComment => (
      <CommentItem
        key={eachComment.id}
        commentDetails={this.commentDetails}
        toggleIsLiked={this.toggleIsLiked}
        isLiked={this.isLiked}
      />
    ))
  }

  render() {
    const {nameInput, commentInput, commentsList} = this.state

    return (
      <div className="container">
        <div className="app-container">
          <h1>Comments</h1>
          <div className="input-container">
            <form>
              <input type="input" value={nameInput} placeholder="Name" />
              <textarea
                type="input"
                value={commentInput}
                placeholder="Comment"
              />
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default Comments
