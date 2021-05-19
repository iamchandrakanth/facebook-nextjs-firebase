import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Contact from "./Contact";

const contacts = [
    { src: "https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4_400x400.jpg", name: "Jeff Bezoz" },
    { src: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg", name: "Elon Musk" },
    { src: "https://wp.technologyreview.com/wp-content/uploads/2021/02/20210128_Keatley-Bill_Gates_0107_R.jpeg", name: "Bill Gates" },
    { src: "https://media-assets-02.thedrum.com/cache/images/thedrum-prod/s3-news-tmp-565461-gary_vaynerchuk_2_0--default--1242.jpg", name: "Gary Vee" },
    { src: "https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/GettyImages-1148265369_460130_nuvmwr.jpg", name: "Mark Zuckerberg" },
    { src: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c7d7829a7ea434b351ba0b6%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D206%26cropX2%3D2043%26cropY1%3D250%26cropY2%3D2089", name: "Mukhesh Ambani" },
    { src: "https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg", name: "Sundar Pichhai" }
];

function Widgets() {

    return (
        <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
            <div className="flex justify-between items-center text-gray-500 mb-5">
                <h2 className="text-xl">Contacts</h2>
                <div className="flex space-x-2">
                    <VideoCameraIcon className="h-6" />
                    <SearchIcon className="h-6" />
                    <DotsHorizontalIcon className="h-6" />
                </div>
            </div>

            {contacts.map(contact => (
                <Contact key={contact.src} src={contact.src} name={contact.name} />
            ))}
        </div>
    )
}

export default Widgets;
