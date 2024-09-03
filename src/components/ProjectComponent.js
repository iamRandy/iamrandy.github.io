import { useEffect } from 'react';
import nullimg from '../imgs/null.jpeg';

function ProjectComponent({name = "no name", 
    description = "no description...", 
    header_image,
    supporting_images = [nullimg, nullimg, nullimg],
    titles = [null, null, null],
    image_shapes = ["", "", ""]
}) {

    useEffect(() => {
        // Focus Effect //
        const target_imgs = document.querySelectorAll(".project_images");
        const handleImgClick = (e) => {
            const target_img = e.target;
            target_img.classList.contains("focus") ? target_img.classList.remove("focus") : target_img.classList.add("focus");
        }

        target_imgs.forEach((e) => {
            e.addEventListener('click', handleImgClick);
        });
        
        // Display Project Content //
        const target_project_heros = document.querySelectorAll(".project_hero_image");
        const target_project_displays = document.querySelectorAll(".project_display")
        const handleHeroClick = (e) => {
            const heroImgObj = e.target;

            target_project_displays.forEach((dis) => {
                if (dis.id === heroImgObj.id) {
                    dis.classList.contains("show_right") ? dis.classList.remove("show_right") : dis.classList.add("show_right");
                    heroImgObj.classList.contains("shrink") ? heroImgObj.classList.remove("shrink") : heroImgObj.classList.add("shrink");
                }
            })
        }

        target_project_heros.forEach((e) => {
            e.addEventListener('click', handleHeroClick);
        })

        // Cleanup //
        return () => {
            target_imgs.forEach((e) => {
                e.removeEventListener('click', handleImgClick);
            });

            target_project_heros.forEach((e) => {
                e.removeEventListener('click', handleHeroClick);
            })
        };
    }, []);


    return(
        <section id="remora">
            <div id={name} className="project_hero">
                <h1>{name}</h1>
                <img id={name} alt={name} title={name} className="project_hero_image" src={header_image} />
            </div>

            <div id={name} className="project_display hide_right">
                <div className="project_text">
                    {description}
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