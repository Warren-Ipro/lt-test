import React from 'react';
import Layout from '../components/layout';

import CompliantLinkSidebar from '../components/compliantLinkSidebar'

function AffiliateTerms() {
  return (
    <Layout>
      <section>
        <div className="container mx-auto px-4 my-8 md:my-16 grid grid-cols-12 md:gap-x-12 compliance-page">
          <div className="hidden md:block col-span-12 md:col-start-1 md:col-span-2 text-sm">
            <CompliantLinkSidebar />
          </div>
          <div className="col-span-12 md:col-start-3 md:col-span-8 leading-loose text-lt-dark-700 divide-y divide-lt-dark-100 compliance-body">
            <h1 className="font-bold text-4xl mb-4 pb-4 text-lt-dark-900">Affiliate Terms</h1>
            <div className="py-8">
            <p>As an Affiliate you agree to the following:</p>
            <ul className="list-disc pl-4">
              <li class="mb-4">The new FTC Guidelines for affiliate marketing came into effect on December 1st 2009. As an affiliate, referral partner, or JV partner for ‘LeadsTunnel’, you’ve read and fully agree to the terms listed on the <a href="http://www.ftc.gov/bcp/guides/guides.shtm"  className="text-lt-blue-500 underline"target="_blank" rel="noreferrer">Official FTC Website</a> to ensure that your promotions are compliant with the new guidelines.</li>
              <li class="mb-4">ABSOLUTELY NO NEGATIVE MARKETING. No “This is a Scam” and turning around to promote the product with your affiliate link. This will not only get ALL commissions negated. You will not be allowed to promote any future products from our company. Also, if not removed immediately, we reserve the right to take legal action. We’re not trying to be unfair or rude, but guys, come on, we have a right to protect our brand. That kind of marketing doesn’t help anyone and isn’t fair to our company. Of course, you’re entitled to your opinion, but we still have the right to protect how our affiliate links are used.</li>
              <li class="mb-4">We have a minimum threshold of $200 USD in commissions for our monthly payout.</li>
              <li class="mb-4">Payment will be processed via PayPal on the 15th of each month for the sales generated the month prior. You will be paid in FULL.</li>
              <li class="mb-4">If you do not have a PayPal account, please contact <a href="mailto:support@leadstunnel.com" className="text-lt-blue-500 underline">support@leadstunnel.com</a> for bank wire transfer information. The minimum payout amount for wire transfer is $800 USD. </li>
              <li class="mb-4">As an affiliate, if you purchase the product under your own link, we will VOID YOUR COMMISSIONS.</li>
              <li class="mb-4">Affiliate sales must qualify as legitimate transactions based on our terms and conditions. All transactions will be monitored and automatically reviewed. If any sales transactions associated with your affiliate ID and/or account do not line up with the types of qualified sales most typically seen through normal traffic generation methods, our system will flag your account. This will trigger a manual review of your transactions, and if necessary your sites and traffic practices. Any questionable transactions will be investigated. We reserve the right to withhold payment of commissions until the review process is completed. If, after a manual review, any transactions are deemed questionable, any earned commissions on those transactions could be invalidated and you may not be paid for them.</li>
              <li class="mb-4">Affiliates are not permitted to do use any keyword-based advertising (such as search engine PPC) targeting a keyword of any of iPro brands (For example, you may not target the keyword “LeadsTunnel” in your PPC campaign)</li>
              <li class="mb-4">Affiliates are not permitted to use domain names containing any of iPro brands to promote. For example, you may not use leadstunnelreview.net, because it has the term “LeadsTunnel” in it, which is one of our brands.</li>
              <li class="mb-4">You may not give away any of OUR material (for example, eBook or report) under any circumstances without prior written consent. (for example, you may not collect an email address in exchange for our eBook).</li>
              <li class="mb-4">Please make sure that your review/bonus site does not accidentally (or purposely) represent as us in any way – using our logo on your page is probably fine, but not in your header. A good example of a good review that follow the rules can be seen <a href="https://jefflenney.com/product-reviews/zero-up-review/"  className="text-lt-blue-500 underline"target="_blank" rel="noreferrer">here</a>.</li>
              <li class="mb-4">You may not use your affiliate link on any of OUR pages (such as comments section)</li>
              <li class="mb-4">We don’t allow cashbacks, rebates, giftcards, iPads etc. Information product bonuses are allowed and encouraged.</li>
            </ul>
            <h3 class="font-bold">During further review you may be asked for the following:</h3>
            <ul className="list-disc pl-4">
              <li class="mb-3">Your full name</li>
              <li class="mb-3">Your phone number (in case we need to interview you)</li>
              <li class="mb-3">Method of promo (i.e.: email marketing, Facebook, Solo, Blog, etc.)</li>
              <li class="mb-3">Proof of method(s) used to promo (snapshot of email list, Facebook ad, solo ad receipt, blog display, website, etc.)</li>
            </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AffiliateTerms
