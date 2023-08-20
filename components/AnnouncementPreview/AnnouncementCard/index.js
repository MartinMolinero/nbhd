import React from "react";

const AnnouncementCard = ({ announcement }) => {

    const {
        title,
        description,
        photo_url,
    } = announcement;

    return (
        <div className="w-full lg:max-w-full lg:flex">
            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: "url(https://v1.tailwindcss.com/img/card-left.jpg)" }} title="Woman holding a mug">
            </div>
            <div className="w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base">{description}</p>
                </div>
                <div className="flex items-center ml-auto">
                    <img className="w-10 h-10 rounded-full mr-4" src={photo_url} alt="Avatar of Jonathan Reinink" />
                    <div className="text-sm">
                        <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                        <p className="text-gray-600">Aug 18</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnnouncementCard;