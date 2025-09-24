// export const metadata = {
//   title: {
//     default: "About",
//     //  absolute: "About"
//   },
// };

export function generateMetadata({params, searchParams}) {
    return {title:  searchParams.name}
}

const About = () => {
  return (
    <div>
      <h2>درباره ی من</h2>
    </div>
  );
};

export default About;
