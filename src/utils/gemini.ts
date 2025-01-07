import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_AI } from "../constants/keys";

const genAI = new GoogleGenerativeAI(GEMINI_AI);
const ModelAI = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

export default ModelAI