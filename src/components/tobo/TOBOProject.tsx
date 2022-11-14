import TOBOButton from "./TOBOButton";
import TOBOMint from "./TOBOMint";
import TOBOProjects from "./TOBOProjects";
import useProject from "hooks/useProject";
import PurchaseProject from "../PurchaseProject";
import "./toboProject.css";

/* Tokens */

function ProjectTokens(props: { id: string }) {
  const { data } = useProject(props.id);
  const project = data?.project;
  const invocations = parseInt(project?.invocations);

  return (
    <div id="toboProjectTokens">
      <h3>MORE ARTWORK</h3>

      {project &&
        [...Array(invocations < 10 ? invocations : 10)].map((_n, i: number) => (
          <div key={i} className="projectTokensMint">
            <TOBOMint invocation={i.toString()} />
          </div>
        ))}

      <div className="clear"></div>
    </div>
  );
}

/* Project Details */

function ProjectDetails(props: { id: string }) {
  const { data } = useProject(props.id);
  const project = data?.project;
  const token = project?.tokens[0];

  const nftClick = () => {
    window.open("https://opensea.io/endaoment");
  };

  const cryptoClick = () => {
    window.open("https://app.endaoment.org/orgs/843739888");
  };

  return (
    <div id="toboProjectDetails">
      <div id="projectDetailsPreview">
        {token && <TOBOMint invocation="0" live />}
      </div>

      <div id="projectDetailsInfo">
        <h3>{project && project.name}</h3>
        <div className="clear"></div>
        <h4>{project && project.artistName}</h4>
        <h5>
          <span>{project && project.invocations}</span> of{" "}
          <span>{project && project.maxInvocations}</span> generated
        </h5>
        <p id="infoTime">
          This auction of 250 unique pieces is priced at 0.20Ξ each, beginning
          at 9pm ET November 15th, 2022. The first five pieces have been
          generated by the artist as a donation to Sostento, and as 1/1 pieces
          for auction on OpenSea in December.
          <br />
          <br />
          <span>price per token:</span> 0.20Ξ
        </p>
        <p id="infoNote">{project && project.description}</p>

        <div id="infoLinks">
          {/*<span id="linksHeading">Proceeds go to:</span>
          <a href="https://endaoment.org/" target="_blank" rel="noreferrer"><img src="/img/tobo/logo-endaoment.png" alt="Endaoment" /></a>
          <a href="https://endaoment.org/" target="_blank" rel="noreferrer"><img src="/img/tobo/logo-endaoment.png" alt="Endaoment" /></a>
          <a href="https://endaoment.org/" target="_blank" rel="noreferrer"><img src="/img/tobo/logo-endaoment.png" alt="Endaoment" /></a>
          <div className="clear"></div>
          <TOBOButton text="Donate NFTs" viaEndaoment={true} action={ nftClick } />
          <TOBOButton text="Donate Crypto" viaEndaoment={true} action={ cryptoClick } />*/}

          <div id="infoMint">
            {project && <PurchaseProject project={project} />}
          </div>
        </div>
      </div>

      <div className="clear"></div>
    </div>
  );
}

/* TOBOProject */

const TOBOProject = (props: { id: string | undefined }) => {
  return (
    <div id="toboProject">
      {props.id && (
        <>
          <ProjectDetails id={props.id} />
          <ProjectTokens id={props.id} />
        </>
      )}
      <TOBOProjects />
    </div>
  );
};

export default TOBOProject;
