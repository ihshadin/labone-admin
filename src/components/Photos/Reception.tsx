import AddPhotos from "./AddPhotos";
import PhotoItem from "./PhotoItem";

const Reception = ({ data, field }: { data: string[]; field: string }) => {
  return (
    <>
      <div className="grid grid-cols-5 gap-5 my-10">
        {data?.length > 0 ? (
          data?.map((img: string) => <PhotoItem img={img} field={field} />)
        ) : (
          <p>No photos</p>
        )}
      </div>
      <div className="border rounded-xl mt-5 px-5 py-6">
        <p className="font-medium mb-1.5">Add Reception Photos</p>
        <AddPhotos field={field} />
      </div>
    </>
  );
};

export default Reception;
