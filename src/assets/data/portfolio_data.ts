import yintii_img from "../images/yintii.png";
import display_img from "../images/display-calc.png";
import bsky_img from "../images/bsky.png";
import tow_img from "../images/tugofwar.png";
import pong_img from "../images/pong.png";
import shadowboy_img from "../images/shadowboy.png";

const PROJECTS = [
        {
            "name": "Display Calculator",
            "technologies": ["React"],
            "image": display_img,
            "github": "https://github.com/Yintii/modular-displays",
            "liveURL": "https://modular-displays.vercel.app/"
        },
        {
            "name": "Yintii URL Shortener",
            "technologies": ["Rails", "PostgreSQL"],
            "image": yintii_img,
            "github": "https://github.com/Yintii/UrlShortener",
            "liveURL": "https://yintii.com"
        },
        {
            "name": "BlueSky Post Bot BoilerPlate",
            "technologies": ["Typescript"],
            "image": bsky_img,
            "github": "https://github.com/Yintii/24Hour-Blue-Sky-Post-Bot",
            "liveURL": ""
        },
        {
            "name": "Tug of War Game",
            "technologies": ["React"],
            "image": tow_img,
            "github": "https://github.com/Yintii/tug-of-war-react",
            "liveURL": ""
        },
        {
            "name": "Pong Game",
            "technologies": ["Godot", "C#"],
            "image": pong_img,
            "github": "",
            "liveURL": "https://boofei.itch.io/pong",
        },
        {
            "name": "ShadowBoy Game - In Development",
            "technologies": ["Godot", "C#"],
            "image": shadowboy_img,
            "github": "",
            "liveURL": "",
        }
    ];

export default PROJECTS;