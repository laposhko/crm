import { Status } from '@/app/components/status-label';
export default function mapStatusToEnum(status: string): Status {
  switch (status) {
    case 'active':
      return Status.Active;
    case 'notActive':
      return Status.NotActive;
    case 'pending':
      return Status.Pending;
    case 'suspended':
      return Status.Suspended;
    default:
      throw new Error(`Unknown status: ${status}`);
  }
}
