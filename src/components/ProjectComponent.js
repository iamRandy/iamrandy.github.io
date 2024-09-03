import nullimg from '../imgs/null.jpeg';

function ProjectComponent({name = "no name", 
    description = "no description...", 
    header_image,
    supporting_images = [nullimg, nullimg, nullimg],
    titles = [null, null, null],
    image_shapes = ["", "", ""]
}) {
    return(
        <section id="remora">
            <div className="project_hero">
                <h1>{name}</h1>
                <img id="remora_logo_image" title="remora logo" className="project_hero_image" src={header_image} />
            </div>

            <div className="project_display">
                <div className="project_text">
                    {description}
                </div>
                <div className="project_supporting_images">
                    <img title={titles[0]} id="project_img1" className={`project_images ${image_shapes[0]}`} src={supporting_images[0]}></img>
                    <img title={titles[1]} id="project_img2" className={`project_images ${image_shapes[1]}`} src={supporting_images[1]}></img>
                    <img title={titles[2]} id="project_img3" className={`project_images ${image_shapes[2]}`} src={supporting_images[2]}></img>
                </div>
            </div>
        </section>
    );
}

export default ProjectComponent;