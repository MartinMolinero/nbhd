import styles from './AnnouncementPreview.module.css'

const AnnouncementPreview = ({ announcement }) => {
    return (<div className={`${styles.card} border-2 rounded-md shadow mt-10 ml-10 w-11/12 pl-5 pt-5 pb-5`}>
        <div className="announcement-title">
        <h1 className="text-4xl font-extrabold">
            {announcement.title}
        </h1>
        </div>
        <div className={`${styles.truncate_text} mt-10 text-black-400/50 font-normal`}>
            {announcement.content_text}
        </div>
    </div>)
}


export default AnnouncementPreview