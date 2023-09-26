import FormLayout from "./FormLayout";
import TitleLayout from "./TittleLayout";

const MainForm = () => {
    return (
        <>
            <div className=" flex flex-col mx-auto items-center " style={{ width: 936, height: 1171 }}>
                <TitleLayout title="Create Product" children="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam vel nemo molestiae nostrum repellendus quod quas qui tenetur quo voluptas expedita ab quibusdam laudantium cum doloremque recusandae, perferendis eum atque?</"/>
                <FormLayout title="Detail Product"/>
            </div>
        </>
    )
}

export default MainForm;