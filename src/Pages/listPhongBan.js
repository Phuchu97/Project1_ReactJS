import { listMembers } from "./listMember"
const it = listMembers.filter(member => member.phongBan === 'IT')
const Design = listMembers.filter(member => member.phongBan === 'Design')
const Tester = listMembers.filter(member => member.phongBan === 'Tester')
const Brse = listMembers.filter(member => member.phongBan === 'Brse')
const CEO = listMembers.filter(member => member.phongBan === 'CEO')
export const listPhongBan = [
    {
        name: 'IT',
        quantity: it.length
    },
    {
        name: 'Design',
        quantity: Design.length
    },
    {
        name: 'Tester',
        quantity: Tester.length
    },
    {
        name: 'Brse',
        quantity: Brse.length
    },
    {
        name: 'CEO',
        quantity: CEO.length
    }
];