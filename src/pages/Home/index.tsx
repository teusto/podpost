import Card from "../../components/Cards";
import PageLayout from "../../components/Layouts/Pages";
import SectionLayout from "../../components/Layouts/Sections";

const Home = () => {
    return (
        <PageLayout>
            <SectionLayout title="First Step: Paste the video url" text="From youtube for now" />
            <SectionLayout title="Second Step: Select the Social to post" text="Linkedin or Instagram">
                <Card />
                <Card />
            </SectionLayout>
            <SectionLayout title="Third Step: Choose the options and click post" text="Free tier you got 2 options" />
        </PageLayout>
    )
};

export default Home;
