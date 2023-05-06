import { TextField } from '@mui/material';
import dynamic from 'next/dynamic';
import 'draft-js/dist/Draft.css';

const MyEditor = dynamic(() => import('@/components/TextEditor'), {
  ssr: false,
});

export default function admBlogPage() {
  return (
    <div>
      <TextField
        label="Titulo"
        className="border-white "
        sx={{
          width: '80%',
          margin: '20px 0px 0px 20px',
          color: 'white !important',
          input: { color: 'white !important' },
          '& label': {
            color: 'white',
          },
          '& label.Mui-focused': {
            color: 'white',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white',
            },
            '&:hover fieldset': {
              borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'white',
            },
          },
        }}
      />
      <div className="w-100 mt-10 flex justify-center">
        <div className="w-2/3">
          <MyEditor />
        </div>
      </div>
    </div>
  );
}
