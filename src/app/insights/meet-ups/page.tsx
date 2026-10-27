import { redirect } from 'next/navigation';

export default function LegacyMeetupsRedirect() {
  redirect('/insights/events');
}
