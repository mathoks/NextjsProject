import {removeBackground} from "@imgly/background-removal-node";
// const {removeBackground} = require("@imgly/background-removal-node");


removeBackground(image_src).then((blob) => {
    return blob
})