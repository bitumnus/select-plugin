import './select/styles.scss'
import {Select} from './select/select';

const select = new Select('#select', {
    placeholder: 'Choose something',
    // selectedId: '5',
    data: [
        {id: '1', value: 'Salad'},
        {id: '2', value: 'Pie'},
        {id: '3', value: 'Tea'},
        {id: '4', value: 'Dumplings'},
        {id: '5', value: 'Pizza'},
        {id: '6', value: 'Hamburger'},
        {id: '7', value: 'Coffee'},
    ],
    onSelect(item) {
        console.log('Selected item: ', item);
    }
});

window.s = select;
