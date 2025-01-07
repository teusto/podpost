import Card from "../../components/Cards";
import { URLBarInput } from "../../components/Inputs";
import PageLayout from "../../components/Layouts/Pages";
import SectionLayout from "../../components/Layouts/Sections";
import Results from "../../components/Results";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

const Home = () => {
    return (
        <PageLayout>
            <SectionLayout title="First Step: Paste the video url" text="From youtube for now">
                <URLBarInput />
            </SectionLayout>
            <SectionLayout title="Second Step: Select the Social to post" text="Linkedin or Instagram">
                <Card name="linkedin" socialIcon={<FaLinkedinIn size={'65%'}/>}/>
                <Card name="x" socialIcon={<FaXTwitter size={'65%'}/>}/>
            </SectionLayout>
            <SectionLayout title="Third Step: Choose the options and click post" text="Free tier you got 2 options">
                <Results />
            </SectionLayout>
        </PageLayout>
    )
};

export default Home;
