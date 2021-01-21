import React from 'react';
import Layout from '../components/layout';
import CompliantLinkSidebar from '../components/compliantLinkSidebar';

function AntiSpam() {
  return (
    <Layout>
      <section>
        <div className="container mx-auto px-4 my-8 md:my-16 grid grid-cols-12 md:gap-x-12 compliance-page">
          <div className="hidden md:block col-span-12 md:col-start-1 md:col-span-2 text-sm">
            <CompliantLinkSidebar />
          </div>
          <div className="col-span-12 md:col-start-3 md:col-span-8 leading-loose text-lt-dark-700 divide-y divide-lt-dark-100 compliance-body">
            <h1 className="font-bold text-4xl mb-4 pb-4 text-lt-dark-900">Anti-Spam Policy</h1>
            <div className="py-8">
              <p>At LeadsTunnel, we dislike unsolicited commercial email (UCE), otherwise known as spam or junk email, as much as you do. Maybe more, since our team gets lots of email every day and there’s no bigger waste of time than deleting all that junk!</p>
              <p>We consider spam to be an offense and disservice to the entire Internet community. This is why we fully endorse and comply with all the requirements of the CAN-SPAM Act of 2003 (Controlling the Assault of Non-Solicited Pornography and Marketing Act). We also comply with all other applicable unsolicited commercial email laws.</p>
              <p>How does this affect you? When you subscribe to our digital/electronic newsletters or other online communications from us and through our website, we always give you the option to unsubscribe. You can do that immediately, or you can do that any time in the future simply by clicking a link in the email you receive from us.</p>
              <p>(Of course, if you send us a support email, an email about billing, or any other individualized email, we will naturally respond personally.)</p>
              <p>If you have questions, concerns or feedback about this anti-spam policy, just ask. Send an email to <a className="text-lt-blue-500 underline" href="mailto:support@leadstunnel.com">support@leadstunnel.com</a> and let us know what’s on your mind.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AntiSpam
