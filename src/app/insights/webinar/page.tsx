import { redirect } from 'next/navigation';

export default function LegacyWebinarRedirect() {
  redirect('/insights/events');
}
