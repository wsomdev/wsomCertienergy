import { Section } from 'src/app/models/commission/section.enum';
import { IReference } from 'src/app/models/common/reference.interface';

export const SECTIONS = [
    {
        reference: Section.UNPAID,
        display: 'Factures Impayées',
        color: 'danger'
    },
    {
        reference: Section.COMMISSION,
        display: 'Commissions en cours',
        color: 'success'
    }
] as IReference[];
