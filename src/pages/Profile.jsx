export default function Profile() {
  return (
    <section>
      <div className="flex-shrink-0 flex flex-col">
        <img
          src="/img/headshot.jpg"
          alt="Zainab Iftikhar"
          className="w-72 py-1 object-cover mx-autoshadow-md"
        />
        <div className="mt-2">
          <h2 className="font-semibold">Contact</h2>
          <p className="">Zainab Iftikhar, PhD Student</p>
          <p className="">Brown University</p>
          <p className="">Email: zainab_iftikhar@brown.edu</p>
        </div>
        <div className="mt-6">
          <h2 className="font-semibold">News</h2>
          <p className="">
            My recent{" "}
            <a
              href="https://ojs.aaai.org/index.php/AIES/article/view/36632"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emphasis hover:text-highlight"
            >
            AAAI/AIES 2025 paper 
            </a> on LLMs’ ethical violations in mental health
            practice has received widespread media coverage, with features in{" "}
            <a
              href="https://www.theguardian.com/technology/2025/nov/02/openai-chatgpt-mental-health-problems-updates"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emphasis hover:text-highlight"
            >
              The Guardian
            </a>
            ,{" "}
            <a
              href="https://www.linkedin.com/posts/aprilyjkoh_mental-health-check-with-april-koh-102425-activity-7388654424107147265-WcGS/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emphasis hover:text-highlight"
            >
              NBC News
            </a>
            ,{" "}
            <a
              href="https://www.politico.com/newsletters/future-pulse/2025/10/30/a-rundown-on-ai-chatbot-bills-in-the-states-00629577"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emphasis hover:text-highlight"
            >
              Politico
            </a>
            , and{" "}
            <a
              href="https://www.sciencenews.org/article/teens-crisis-ai-chatbots-risks-mental"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emphasis hover:text-highlight"
            >
              Science News
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}