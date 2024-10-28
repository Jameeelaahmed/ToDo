import classes from './Sidebar.module.css'
import profile from '../../assets/JAMEELA.jpg'
import * as FaIcons from "react-icons/fa6";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className={classes.sidebar}>
                <div className={classes.profile}>
                    <img src={profile} className={classes.profile_img} />
                    <p className={classes.user}>Jameela Ahmed</p>
                </div>
                <ul className={classes.list_container}>
                    <li className={classes.list}>
                        <FaIcons.FaListCheck />
                        <p className={classes.word}>Tasks</p>
                    </li>
                    <li className={classes.list}>
                        <FaIcons.FaCalendarDays />
                        <p className={classes.word}>Scheduale</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}