import { BiPlus } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function CreateButton(){
  return (
    <div className="fixed shadow-xl inset-be-0 right-0 m-8 rounded-full hover:-translate-y-0.5 hover:bg-white transition bg-gray-100">
      <Link to='/create-notes'><BiPlus size={40}></BiPlus></Link>
    </div>
  );
}

export default CreateButton;