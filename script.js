$(document).ready(function() {
    // Extended playlist data with 12 videos
    const playlist = [
        {
            id: 1,
            title: "Introduction to Modern JavaScript",
            description: "Learn the fundamentals of modern JavaScript including ES6+ features, arrow functions, and template literals.",
            duration: "12:45",
            thumbnail: "https://i.ytimg.com/vi/1Rs2ND1ryYc/hqdefault.jpg",
            videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
            views: 1245,
            instructor: "Dr. Sarah Johnson",
            date: "March 15, 2023",
            completed: true
        },
        {
            id: 2,
            title: "Working with React Components",
            description: "Understand how to create and manage components in React applications.",
            duration: "18:30",
            thumbnail: "https://i.ytimg.com/vi/w7ejDZ8SWv8/hqdefault.jpg",
            videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4",
            views: 987,
            instructor: "Dr. Sarah Johnson",
            date: "March 17, 2023",
            completed: true
        },
        {
            id: 3,
            title: "State Management with Redux",
            description: "Learn how to manage application state using Redux in complex applications.",
            duration: "22:15",
            thumbnail: "https://i.ytimg.com/vi/3sjMRS1gJys/hqdefault.jpg",
            videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_5mb.mp4",
            views: 756,
            instructor: "Dr. Sarah Johnson",
            date: "March 20, 2023",
            completed: false
        },
        {
            id: 4,
            title: "Responsive CSS with Flexbox and Grid",
            description: "Master modern CSS layout techniques with Flexbox and Grid.",
            duration: "15:20",
            thumbnail: "https://i.ytimg.com/vi/RSIclWvNTdQ/hqdefault.jpg",
            videoUrl: "https://sample-videos.com/video123/mp4/480/big_buck_bunny_480p_1mb.mp4",
            views: 1123,
            instructor: "Dr. Sarah Johnson",
            date: "March 22, 2023",
            completed: false
        },
        {
            id: 5,
            title: "Building RESTful APIs with Node.js",
            description: "Create robust backend services using Node.js and Express.",
            duration: "25:40",
            thumbnail: "https://i.ytimg.com/vi/pU9Q6oiQNd0/hqdefault.jpg",
            videoUrl: "https://sample-videos.com/video123/mp4/240/big_buck_bunny_240p_1mb.mp4",
            views: 654,
            instructor: "Dr. Sarah Johnson",
            date: "March 25, 2023",
            completed: false
        },
        {
            id: 6,
            title: "Authentication and Authorization",
            description: "Implement secure user authentication and authorization in your applications.",
            duration: "19:15",
            thumbnail: "https://i.ytimg.com/vi/2PPSXonhIck/hqdefault.jpg",
            videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
            views: 543,
            instructor: "Dr. Sarah Johnson",
            date: "March 28, 2023",
            completed: false
        },
        {
            id: 7,
            title: "Advanced React Hooks",
            description: "Deep dive into React hooks like useReducer, useMemo, and useCallback.",
            duration: "21:10",
            thumbnail: "https://i.ytimg.com/vi/dpw9EHDh2bM/hqdefault.jpg",
            videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4",
            views: 876,
            instructor: "Dr. Sarah Johnson",
            date: "March 30, 2023",
            completed: false
        },
        {
            id: 8,
            title: "TypeScript Fundamentals",
            description: "Introduction to TypeScript and its benefits for large-scale applications.",
            duration: "17:45",
            thumbnail: "https://i.ytimg.com/vi/BwuLxPH8IDs/hqdefault.jpg",
            videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_5mb.mp4",
            views: 765,
            instructor: "Dr. Sarah Johnson",
            date: "April 2, 2023",
            completed: false
        },
        {
            id: 9,
            title: "Web Performance Optimization",
            description: "Techniques to improve your website's loading speed and performance.",
            duration: "24:30",
            thumbnail: "https://i.ytimg.com/vi/6lfyGdOXa6Q/hqdefault.jpg",
            videoUrl: "https://sample-videos.com/video123/mp4/480/big_buck_bunny_480p_1mb.mp4",
            views: 654,
            instructor: "Dr. Sarah Johnson",
            date: "April 5, 2023",
            completed: false
        },
        {
            id: 10,
            title: "GraphQL with Apollo Client",
            description: "Learn how to implement GraphQL in your frontend applications.",
            duration: "20:15",
            thumbnail: "https://i.ytimg.com/vi/eIQh02xuVw4/hqdefault.jpg",
            videoUrl: "https://sample-videos.com/video123/mp4/240/big_buck_bunny_240p_1mb.mp4",
            views: 543,
            instructor: "Dr. Sarah Johnson",
            date: "April 8, 2023",
            completed: false
        },
        {
            id: 11,
            title: "Testing React Applications",
            description: "Write comprehensive tests for your React components and hooks.",
            duration: "16:50",
            thumbnail: "https://i.ytimg.com/vi/3e1GHCA3GP0/hqdefault.jpg",
            videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
            views: 432,
            instructor: "Dr. Sarah Johnson",
            date: "April 11, 2023",
            completed: false
        },
        {
            id: 12,
            title: "Deployment Strategies",
            description: "Learn different deployment strategies for modern web applications.",
            duration: "14:25",
            thumbnail: "https://i.ytimg.com/vi/7YcW25PHnAA/hqdefault.jpg",
            videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4",
            views: 321,
            instructor: "Dr. Sarah Johnson",
            date: "April 14, 2023",
            completed: false
        }
    ];

    // Initialize video player
    const video = document.getElementById('main-video');
    const playPauseBtn = $('.play-pause-btn');
    const volumeBtn = $('.volume-btn');
    const volumeSlider = $('.volume-range');
    const progressBar = $('.progress-bar');
    const timeDisplay = $('.time-display');
    const speedBtn = $('.speed-btn');
    const fullscreenBtn = $('.fullscreen-btn');
    const videoOverlay = $('.video-overlay');
    const playBtn = $('.play-btn');
    const videoTitle = $('.video-title');
    const videoDescription = $('.video-description');
    const videoMeta = $('.video-meta');
    const playlistItems = $('.playlist-items');
    const speedOptions = $('.speed-options');
    const speedOptionItems = $('.speed-options li');

    let currentVideoIndex = 0;

    // Add this function to calculate total duration
    function calculateTotalDuration() {
        let totalSeconds = 0;
        
        playlist.forEach(video => {
            const [minutes, seconds] = video.duration.split(':').map(Number);
            totalSeconds += minutes * 60 + seconds;
        });
        
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        
        let durationString = '';
        if (hours > 0) {
            durationString += `${hours}h `;
        }
        durationString += `${minutes}m`;
        
        return durationString;
    }

    // Update the populatePlaylist function to include total duration
    function populatePlaylist() {
        playlistItems.empty();
        
        // Update the count and duration in the header
        $('.playlist-count').text(`${playlist.length} videos`);
        $('.playlist-duration').text(`Total: ${calculateTotalDuration()}`);
        
        playlist.forEach((video, index) => {
            const item = $(`
                <div class="playlist-item ${index === currentVideoIndex ? 'active playing' : ''}" data-index="${index}">
                    <div class="playlist-item-thumbnail">
                        <img src="${video.thumbnail}" alt="${video.title}">
                        <i class="fas ${video.completed ? 'fa-check' : 'fa-play'}"></i>
                    </div>
                    <div class="playlist-item-info">
                        <div class="playlist-item-title">${video.title}</div>
                        <div class="playlist-item-duration">${video.duration}</div>
                    </div>
                </div>
            `);
            
            playlistItems.append(item);
        });
    }

    // Load video
    function loadVideo(index) {
        const videoData = playlist[index];
        
        video.src = videoData.videoUrl;
        videoTitle.text(videoData.title);
        videoDescription.text(videoData.description);
        videoMeta.html(`
            <span class="instructor"><i class="fas fa-user"></i> ${videoData.instructor}</span>
            <span class="views"><i class="fas fa-eye"></i> ${videoData.views.toLocaleString()} views</span>
            <span class="upload-date"><i class="fas fa-calendar-alt"></i> ${videoData.date}</span>
        `);
        
        // Update active state in playlist
        $('.playlist-item').removeClass('active playing');
        $(`.playlist-item[data-index="${index}"]`).addClass('active playing');
        
        // Reset progress bar
        progressBar.val(0);
    }

    // Format time
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }

    // Update time display
    function updateTimeDisplay() {
        timeDisplay.text(`${formatTime(video.currentTime)} / ${formatTime(video.duration)}`);
    }

    // Update progress bar
    function updateProgressBar() {
        const value = (video.currentTime / video.duration) * 100;
        progressBar.val(value || 0);
    }

    // Event listeners
    video.addEventListener('timeupdate', function() {
        updateTimeDisplay();
        updateProgressBar();
    });

    video.addEventListener('loadedmetadata', function() {
        updateTimeDisplay();
    });

    video.addEventListener('play', function() {
        $('.playlist-item').removeClass('playing');
        $(`.playlist-item[data-index="${currentVideoIndex}"]`).addClass('playing');
        playPauseBtn.find('i').removeClass('fa-play').addClass('fa-pause');
    });

    video.addEventListener('pause', function() {
        $(`.playlist-item[data-index="${currentVideoIndex}"]`).removeClass('playing');
        playPauseBtn.find('i').removeClass('fa-pause').addClass('fa-play');
    });

    video.addEventListener('ended', function() {
        playPauseBtn.find('i').removeClass('fa-pause').addClass('fa-play');
        playlist[currentVideoIndex].completed = true;
        $(`.playlist-item[data-index="${currentVideoIndex}"] .playlist-item-thumbnail i`)
            .removeClass('fa-play')
            .addClass('fa-check');
    });

    playPauseBtn.click(function() {
        if (video.paused) {
            video.play();
            $(this).find('i').removeClass('fa-play').addClass('fa-pause');
            videoOverlay.fadeOut();
        } else {
            video.pause();
            $(this).find('i').removeClass('fa-pause').addClass('fa-play');
        }
    });

    videoOverlay.click(function() {
        video.play();
        playPauseBtn.find('i').removeClass('fa-play').addClass('fa-pause');
        $(this).fadeOut();
    });

    volumeBtn.click(function() {
        if (video.muted) {
            video.muted = false;
            $(this).find('i').removeClass('fa-volume-mute').addClass('fa-volume-up');
        } else {
            video.muted = true;
            $(this).find('i').removeClass('fa-volume-up').addClass('fa-volume-mute');
        }
    });

    volumeSlider.on('input', function() {
        video.volume = $(this).val() / 100;
        if (video.volume === 0) {
            volumeBtn.find('i').removeClass('fa-volume-up').addClass('fa-volume-mute');
        } else {
            volumeBtn.find('i').removeClass('fa-volume-mute').addClass('fa-volume-up');
        }
    });

    progressBar.on('input', function() {
        const seekTime = (video.duration * $(this).val()) / 100;
        video.currentTime = seekTime;
    });

    speedBtn.click(function(e) {
        e.stopPropagation();
        speedOptions.toggle();
    });

    speedOptionItems.click(function() {
        const speed = parseFloat($(this).data('speed'));
        video.playbackRate = speed;
        speedBtn.text(`${speed}x`);
        speedOptionItems.removeClass('active');
        $(this).addClass('active');
        speedOptions.hide();
    });

    fullscreenBtn.click(function() {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
        }
    });

    $(document).click(function() {
        speedOptions.hide();
    });

    // Playlist item click
    $(document).on('click', '.playlist-item', function() {
        const index = parseInt($(this).data('index'));
        currentVideoIndex = index;
        loadVideo(index);
        video.play();
        playPauseBtn.find('i').removeClass('fa-play').addClass('fa-pause');
        videoOverlay.fadeOut();
    });

    // Keyboard shortcuts
    $(document).keydown(function(e) {
        // Space bar to play/pause
        if (e.keyCode === 32 && !$(e.target).is('input, textarea')) {
            e.preventDefault();
            playPauseBtn.click();
        }
        
        // Arrow keys for seeking
        if (e.keyCode === 37) { // Left arrow
            video.currentTime = Math.max(0, video.currentTime - 5);
        } else if (e.keyCode === 39) { // Right arrow
            video.currentTime = Math.min(video.duration, video.currentTime + 5);
        }
        
        // M key for mute
        if (e.keyCode === 77) {
            volumeBtn.click();
        }
    });

    // Initialize
    populatePlaylist();
    loadVideo(currentVideoIndex);
});