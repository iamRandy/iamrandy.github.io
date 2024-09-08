import nullimg from '../imgs/null.jpeg';
import DOMPurify from 'dompurify';

function ProjectComponent({name = "no name", 
    description = "no description...", 
    header_image,
    supporting_images = [nullimg, nullimg, nullimg],
    titles = [null, null, null],
    image_shapes = ["", "", ""]
}) {
    const sanitizedDescription = DOMPurify.sanitize(description);

    return(
        <section className="detail_section">
            <div id={name} className="project_hero">
                <h1>{name}</h1>
                <img id={name} alt={name} title={name} className="project_hero_image" src={header_image} />
            </div>

            <div id={name} className="project_display hide_right">
                <div className="project_text">
                    <p dangerouslySetInnerHTML={{ __html: sanitizedDescription }}></p>
                </div>
                <div className="project_supporting_images">
                    <img alt={titles[0]} title={titles[0]} id="project_img1" className={`project_images ${image_shapes[0]}`} src={supporting_images[0]}></img>
                    <img alt={titles[1]} title={titles[1]} id="project_img2" className={`project_images ${image_shapes[1]}`} src={supporting_images[1]}></img>
                    <img alt={titles[2]} title={titles[2]} id="project_img3" className={`project_images ${image_shapes[2]}`} src={supporting_images[2]}></img>
                </div>
            </div>
        </section>
    );
}

export default ProjectComponent;