const newFormHandler = async (event) => {
    event.preventDefault();
const blogId = event.target.value;

    // Targeting comment input
const content = document.querySelector('#comment-content').value.trim();
  
    if (content) {
      const response = await fetch(`/api/blogs/comment/${blogId}`, {
        method: 'POST',
        body: JSON.stringify({ content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to comment on the post');
      }
    }
  };
  
  document
    .querySelector('#commenter')
    .addEventListener('click', newFormHandler);