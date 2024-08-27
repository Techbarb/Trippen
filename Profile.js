document.addEventListener('DOMContentLoaded', () => {
    // Simulate fetching profile data
    const profileData = {
        profilePicture: 'path/to/profile-picture.jpg',
        username: 'JohnDoe',
        likes: 150,
        posts: ['Post 1', 'Post 2', 'Post 3'],
        savedPosts: ['Saved Post 1', 'Saved Post 2'],
        bucketList: ['Bucket List Item 1', 'Bucket List Item 2']
    };

    // Populate profile data
    document.getElementById('profile-picture').src = profileData.profilePicture;
    document.getElementById('username').textContent = profileData.username;
    document.getElementById('likes').textContent = `Likes: ${profileData.likes}`;
    
    // Populate posts
    const postsContainer = document.getElementById('posts');
    profileData.posts.forEach(post => {
        const postElement = document.createElement('p');
        postElement.textContent = post;
        postsContainer.appendChild(postElement);
    });

    // Populate saved posts
    const savedPostsContainer = document.getElementById('saved-posts');
    profileData.savedPosts.forEach(post => {
        const postElement = document.createElement('p');
        postElement.textContent = post;
        savedPostsContainer.appendChild(postElement);
    });

    // Populate bucket list
    const bucketListContainer = document.getElementById('bucket-list');
    profileData.bucketList.forEach(item => {
        const itemElement = document.createElement('p');
        itemElement.textContent = item;
        bucketListContainer.appendChild(itemElement);
    });

    // Handle picture upload
    document.getElementById('upload-picture').addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log('Uploading:', file.name);
            // Handle the file upload process here
        }
    });
});
