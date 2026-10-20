import PixelButton from './PixelButton'

function nav() {

    return (
        <>
            <div className='flex justify-center gap-20'>
                {/* About me */}
                <PixelButton imgStatic='/pngs/Aboutmebutton.png' alt='about me' />


                {/* Projects */}
                {/* <NavButton imgStatic='/pngs/projects.png' alt='projects' /> */}

                {/* Quicklink */}
                {/* <NavButton imgStatic='/pngs/quicklink.png' alt='quicklink' /> */}

            </div>
        </>
    )
}

export default nav