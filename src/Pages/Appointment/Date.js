
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const Date = ({date,setDate}) => {
    return (<>
      <DayPicker
      mode="single"
      selected={date}
      onSelect={setDate}
      />
      <p>You have selected: {format(date,'PP')}</p>
      </>
    );
};

export default Date;