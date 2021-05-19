import StoryCard from "./StoryCard";

const stories = [
    {
        name: "Chandrakanth Macha",
        src: "https://images.pexels.com/photos/7760754/pexels-photo-7760754.jpeg",
        profile: "https://images.pexels.com/photos/7760754/pexels-photo-7760754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
        name: "Srinivas Vemula",
        src: "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        profile: "https://images.pexels.com/photos/7760754/pexels-photo-7760754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
        name: "Sathish Komati",
        src: "https://images.pexels.com/photos/2294478/pexels-photo-2294478.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        profile: "https://images.pexels.com/photos/7760754/pexels-photo-7760754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
        name: "Mallesh Varma",
        src: "https://images.pexels.com/photos/4321509/pexels-photo-4321509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        profile: "https://images.pexels.com/photos/7760754/pexels-photo-7760754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
        name: "Sudhakar Yelamanchi",
        src: "https://images.pexels.com/photos/2659177/pexels-photo-2659177.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        profile: "https://images.pexels.com/photos/7760754/pexels-photo-7760754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
];



function Stories() {
    return (
        <div className="flex justify-center space-x-3 mx-auto">
            {stories.map((story) => (
                <StoryCard key={story.src} name={story.name} src={story.src} profile={story.profile}/>
            ))}
        </div>
    ) 
};

export default Stories;
