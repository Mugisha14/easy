document.addEventListener('DOMContentLoaded', () => {
    // Profile Picture Animation
    const profilePic = document.getElementById('profile-pic');
    profilePic.style.opacity = 0;
    profilePic.style.transform = 'scale(0.9)';
    profilePic.style.transition = 'opacity 1s ease-in-out, transform 1s ease-in-out';
    
    setTimeout(() => {
        profilePic.style.opacity = 1;
        profilePic.style.transform = 'scale(1)';
    }, 100);

    // Friend Images Animation
    const friends = document.querySelectorAll('.friend img');
    friends.forEach((friend, index) => {
        friend.style.opacity = 0;
        friend.style.transform = 'translateY(20px)';
        friend.style.transition = `opacity 0.5s ease-in-out ${index * 0.2}s, transform 0.5s ease-in-out ${index * 0.2}s`;

        setTimeout(() => {
            friend.style.opacity = 1;
            friend.style.transform = 'translateY(0)';
        }, 100);
    });
});
