import React from 'react';
import PropTypes from 'prop-types';
import { Dialog } from '@material-ui/core';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogContent from '@material-ui/core/DialogContent';
import Layout from '../components/layout';
import { CloseButton } from '../components/Buttons';

function TermsOfService(props) {
  return (
    <Layout {...props}>
      <Dialog fullScreen aria-labelledby="terms-of-service-modal" open={true}>
        <div style={{ width: '100%' }}>
          {props.location.state && props.location.state.from !== null ? (
            <CloseButton
              style={{ width: 'min-content', float: 'right' }}
              iconProps={{ size: 20 }}
              onClick={() => props.navigate(props.location.state.from)}
            />
          ) : null}
        </div>
        <DialogTitle id="terms-of-service-modal">Terms of Service</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This notice sets forth the terms and conditions under which
            Foodnome, Inc., a Delaware corporation, any features and services
            from the website foodnome.com and mobile applications (collectively
            Foodnome) provides information on this website, as well as the terms
            and conditions governing your use of this website, along with any
            additional terms and conditions that may be referenced herein or
            that are presented elsewhere on the website in relation to a
            specific service or feature. By making use of this website or being
            redirected here from another domain, you agree to be bound by the
            terms and conditions that appear hereunder. The terms and conditions
            are subject to updating at any time without notice and such changes,
            additions or deletions shall be effective immediately upon posting.
            We may terminate, change, suspend or discontinue any aspect of the
            website, including the availability of any features of the website,
            at any time. If at any time you do not accept the terms and
            conditions, do not access the website or any of its pages. Changes
            to the terms and conditions take effect when posted to the website.
            The Foodnome website allows home-based restaurants ("Restaurants")
            to market and offer for sale meals for dine in, delivery, and/or
            pick up and customers to search for and purchase such meals. You
            should closely review the information concerning the Restaurants to
            ensure you are able to properly utilize and benefit from the
            Foodnome services. The Restaurants are obligated by Foodnome to
            comply with federal, state and local laws, rules, regulations, and
            standards pertaining to food preparation, sale, marketing and
            safety. However, it is critical for you to understand that Foodnome
            does not in any way independently verify the credentials,
            representations or products of Restaurants, the ingredients or the
            quality of any products, or that a Restaurant is in compliance with
            applicable laws. You must make yourself comfortable through
            information provided by Restaurants on the Foodnome website or as
            requested by you directly from the Restaurants as to the quality and
            reliability of the Restaurants, as well as to their compliance with
            applicable laws. Foodnome does not in any way guaranty the quality
            of any food or that any food complies with applicable laws. In
            addition, a Restaurant may represent that food preparation is in
            accordance with special standards such as "organic," "kosher,"
            "macrobiotic" or allergen-specific standards such as "nut-free,"
            "gluten-free," or "lactose-free." However, Foodnome does not
            independently investigate or verify such representations. Foodnome
            shall not be liable or responsible for any food or services offered
            by Restaurants that is unhealthy, is the cause of injury, that is
            otherwise unacceptable to buyers or that does not meet the
            expectation of buyers in any manner. You are solely responsible for
            verifying the accuracy of delivery addresses, and Foodnome shall
            have no liability or responsibility for any such erroneous
            addresses.
          </DialogContentText>
          <DialogTitle>NO WARRANTY</DialogTitle>
          <DialogContentText>
            FOODNOME SPECIFICALLY DISCLAIMS ALL WARRANTIES WITH RESPECT TO THIS
            WEBSITE OR YOUR USE THEREOF. THE CONTENT, INFORMATION AND SERVICES
            PROVIDED THROUGH THIS WEBSITE, INCLUDING BUT NOT LIMITED TO
            GRAPHICS, TEXT AND LINKS TO OTHER SITES, ARE PROVIDED ON AN "AS IS"
            AND AS AVAILABLE BASIS AND MAY BE CHANGED WITHOUT PRIOR NOTICE. YOU
            EXPRESSLY AGREE THAT THE USE OF THIS WEBSITE IS AT YOUR OWN
            DISCRETION AND RISK AND YOU WILL BE SOLELY RESPONSIBLE FOR ANY
            DAMAGE TO YOUR COMPUTER SYSTEM OR LOSS OF DATA THAT RESULTS FROM THE
            DOWNLOAD OF ANY SUCH MATERIAL. FOODNOME MAKES NO REPRESENTATIONS OR
            WARRANTIES OF ANY KIND WITH RESPECT TO THE ACCURACY, ADEQUACY,
            APPROPRIATENESS, COMPLETENESS, CONDITION, CONTENT, QUALITY,
            RELIABILITY, SUFFICIENCY, CORRECTNESS, VERACITY, VALUE,
            COMPLETENESS, OR TIMELINESS OF THE CONTENT, INFORMATION, OPINIONS,
            ADVICE, SERVICES, TEXT, GRAPHICS, LINKS OR OTHER ITEMS PROVIDED
            THROUGH THE WEBSITE OR WHETHER SAME WILL BE UNINTERRUPTED. FOODNOME
            EXPRESSLY DISCLAIMS ALL SUCH REPRESENTATIONS AND WARRANTIES, EITHER
            EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION WARRANTIES OF
            TITLE, NONINFRINGEMENT, OR IMPLIED WARRANTIES OF MERCHANTABILITY OR
            FITNESS FOR A PARTICULAR PURPOSE.
          </DialogContentText>
          <DialogTitle>LIMITATION OF LIABILITY</DialogTitle>
          <DialogContentText>
            THE INFORMATION CONTAINED ON THE FOODNOME WEBSITE IS PROVIDED FOR
            EDUCATIONAL AND INFORMATION PURPOSES HEREIN. DUE TO THE RAPIDLY
            CHANGING NATURE OF THE LAW, FOODNOME DOES NOT WARRANT OR GUARANTEE
            THE ACCURACY OR AVAILABILITY OF THE CONTENT ON THIS WEBSITE OR ON
            OTHER SITES TO WHICH IT LINKS. OTHER THAN AS REQUIRED BY APPLICABLE
            LAW, IF ANY, IN NO EVENT SHALL FOODNOME OR ITS SHAREHOLDERS,
            DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, SUBSIDIARIES, COMMUNITY,
            AFFILIATES, LICENSORS, CO-BRANDERS OR OTHER PARTNERS, AND ANY AND
            ALL THIRD PARTIES THAT PROVIDE CONTENT, INFORMATION OR SERVICES FOR
            THIS WEBSITE BE LIABLE TO YOU FOR ANY LOSS, EXPENSE OR DAMAGES
            WHATSOEVER ARISING OUT OF THE USE OF, MISUSE OF, RELIANCE ON, OR
            INABILITY TO USE, THE WEBSITE OR ITS CONTENT, REGARDLESS OF: THE
            TYPE OF DAMAGES (INCLUDING BUT NOT LIMITED TO DIRECT, INDIRECT,
            INCIDENTAL, SPECIAL, PUNITIVE, CONSEQUENTIAL, LOSS OF DATA, INCOME,
            PROFITS OR REVENUE, LOSS OF OR DAMAGE TO PROPERTY, AND CLAIMS OF
            THIRD PARTIES - EVEN IF FOODNOME HAS BEEN ADVISED OF THE POSSIBILITY
            OF SUCH DAMAGES); HOW IT WAS CAUSED (DIRECTLY OR INDIRECTLY BY ANY
            ERRORS OR OMISSIONS IN THE CONTENT, BY THE USE, INABILITY TO USE,
            EXISTENCE OR RELIANCE UPON SUCH CONTENT, INFORMATION OR SERVICES, BY
            THE USE OR PERFORMANCE OF THIS WEBSITE, BY THE PROVISION OF OR
            FAILURE TO PROVIDE SERVICES, BY THE INFORMATION OR SERVICES PROVIDED
            THROUGH THIS WEBSITE, OR OTHERWISE ARISING OUT OF THE USE OF THIS
            WEBSITE); OR THE LEGAL THEORY ASSERTED (CONTRACT, TORT, NEGLIGENCE,
            STRICT LIABILITY OR OTHERWISE). FOODNOME ASSUMES NO DUTY OF CARE AND
            THE INFORMATION IS PROVIDED WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT
            AND FREEDOM FROM COMPUTER VIRUSES OR SIMILAR DISABLING DEVICES. YOU
            ALONE ARE RESPONSIBLE FOR EVALUATING THE ACCURACY, COMPLETENESS OR
            USEFULNESS OF ANY INFORMATION, ADVICE OR OTHER CONTENT AVAILABLE ON
            THIS WEBSITE. ALTHOUGH WE MAKE GOOD FAITH EFFORTS TO MAINTAIN A
            SECURE OPERATING ENVIRONMENT, WE CANNOT GUARANTEE COMPLETE SECURITY.
            BY VISITING FOODNOME WEBSITE, YOU AGREE TO INDEMNIFY AND HOLD
            FOODNOME, AND ITS SUBSIDIARIES, COMMUNITY, AFFILIATES, OFFICERS,
            AGENTS, CO-BRANDERS OR OTHER PARTNERS, AND EMPLOYEES, HARMLESS FROM
            ANY CLAIM OR DEMAND, INCLUDING REASONABLE ATTORNEYS' FEES, MADE BY
            ANY THIRD PARTY DUE TO OR ARISING OUT OF CONTENT YOU SUBMIT, POST,
            TRANSMIT OR MAKE AVAILABLE THROUGH THE WEBSITE, YOUR USE OF THE
            WEBSITE, YOUR CONNECTION TO THE WEBSITE, YOUR VIOLATION OF THE TERMS
            AND CONDITIONS, OR YOUR VIOLATION OF ANY RIGHTS OF ANOTHER. Because
            some states/jurisdictions do not allow the exclusion or limitation
            of liability for consequential or incidental damages, the above
            limitation may not apply to you. If you are dissatisfied with any
            portion of the website or related services, or with any of these
            terms of use, your sole and exclusive remedy is to stop using the
            website and related services.
          </DialogContentText>
          <DialogTitle>
            ARBITRATION AND WAIVER OF CLASS ACTION AND JURY TRIAL
          </DialogTitle>
          <DialogContentText>
            ALL CLAIMS AND DISPUTES ARISING UNDER OR RELATING TO THIS TERMS AND
            CONDITIONS ARE TO BE SETTLED BY BINDING ARBITRATION IN SAN
            FRANCISCO. YOU AGREE THAT ANY AND ALL CLAIMS AND DISPUTES, WHETHER
            SUBMITTED TO ARBITRATION OR DECIDED BY A COURT, MUST BE BROUGHT IN
            YOUR INDIVIDUAL CAPACITY AND NOT AS A CLASS ACTION PLAINTIFF OR
            CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING.
            YOU AGREE TO WAIVE THE RIGHT TO PARTICIPATE IN A CLASS ACTION OR
            LITIGATE ON A CLASS-WIDE BASIS. YOU AGREE THAT YOU HAVE EXPRESSLY
            AND KNOWINGLY WAIVED THESE RIGHTS. YOU AND FOODNOME HEREBY
            VOLUNTARILY AND KNOWINGLY WAIVE THE RIGHT TO TRIAL BY JURY OF ALL
            DISPUTES AND CLAIMS BY, BETWEEN OR AGAINST EITHER YOU OR FOODNOME
            WHETHER THE DISPUTE OR CLAIM IS SUBMITTED TO ARBITRATION OR IS
            DECIDED BY A COURT, TO THE FULLEST EXTENT ALLOWED BY LAW.
          </DialogContentText>
          <DialogTitle>Reviews and Comments</DialogTitle>
          <DialogContentText>
            If at any time, Foodnome enables site visitors to post reviews of
            and comments on products featured on the site, the party posting
            that comment or review grants Foodnome and its affiliates a
            non-exclusive, royalty-free, perpetual, irrevocable, and fully
            sub-licensable right to use, reproduce, modify, adapt, publish,
            translate, create derivative works from, distribute, and display
            such reviews and comments throughout the world in any media. You
            also grant Foodnome and its affiliates the right to use the name
            that you submit with any review or comment, if any, in connection
            with such review or comment.
          </DialogContentText>
          <DialogTitle>Intellectual Property</DialogTitle>
          <DialogContentText>
            All of the information on this website contain copyrighted material,
            trademarks and other proprietary information, including all text,
            graphics, software applications, video and audio files and photos
            (collectively, "content"), and all rights in the pages and the
            screens displaying the pages are owned by Foodnome and its community
            or affiliated entities or their licensors, protected by copyright
            under United States copyright laws and foreign laws. Foodnome owns
            copyright in the selection, coordination, arrangement and
            enhancement of such content, as well as in the content original to
            it. You may not modify, reproduce, copy, distribute, transmit,
            display, publish, sell, license, create derivative works of or use
            any aspect of the website or its content, including, but not limited
            to copy, graphics, photos, web design, and the like for commercial
            or public purposes or on any other website or in a networked
            computer environment or engage in any other redistribution or
            republication of the protected content herein. All rights are
            reserved, including common law or registered trademarks, service
            marks, trade names, logos, URLs, domain names, and icons appearing
            on this website, which are owned by Foodnome and its community or
            affiliated entities or their licensors. Nothing on this website
            grants you any right or license to use any intellectual property
            including business methods or processes without the express written
            permission of Foodnome. No material appearing on any Foodnome domain
            may be copied, distributed, posted, reproduced, republished, sold,
            transmitted, uploaded, or exploited in any means or for any use not
            approved of in writing by Foodnome at the address above. You agree
            not to copy, duplicate, reproduce, sell, resell or exploit for any
            commercial purposes, any portion of this website, its use or access
            to it. You further acknowledge that you do not acquire any ownership
            rights by downloading copyrighted material. Any information sent to
            Foodnome via Internet e-mail or through the website is not secure
            and is done on a non-confidential basis. All information that you
            submit via our websites or related e-mail shall be deemed and remain
            the property Foodnome subject to our Privacy Policy. If you post,
            upload, submit or otherwise transmit any content on or through this
            website, you agree to provide true, accurate and complete
            information and to refrain from impersonating any person or entity
            and from falsely representing your affiliation with any person or
            entity. Any submission of such information will be subject to these
            terms of use. We shall, subject to our Privacy Policy, be free to
            use, for any purpose, any ideas, concepts, know-how or techniques
            contained in information a visitor to this website provides to us
            through this website. We shall not be subject to any obligations
            regarding such information except as expressly indicated with
            respect to personally identifiable information in statement
            contained within the website addressing privacy or to the extent
            required by law.
          </DialogContentText>

          <DialogTitle>Hypertext Links</DialogTitle>
          <DialogContentText>
            You may create a text link to the home page of this website only for
            legitimate business reasons on the condition that it is clear to the
            users that they are exiting your own website and entering a new
            website, you do not frame or in-line our website or its content, and
            you do not create a false association or endorsement or otherwise
            misrepresent your relationship with Foodnome. Likewise, as a
            convenience to you, Foodnome may provide links to third party
            websites, or permit third parties to link to this website. Because
            these other websites are not under our control, we cannot guarantee
            the quality, accuracy, timeliness or security of those websites.
            Your business dealings or correspondence with, or participation in
            promotions of, advertisers other than Foodnome and any terms,
            conditions, warranties or representations associated with such
            dealings, are solely between you and such third party. A link to or
            from another website does not necessarily imply an affiliation
            between Foodnome and the third party website owner or an endorsement
            of the third party site or any products or services that it
            describes. Your access to and use of any other websites linked to or
            from this website or any result of the presence of third-party
            advertisers on this website is at your own risk and we assume no
            obligation or liability in connection therewith. We may disable a
            link at any time and may remove links from this website at the third
            party owner's request.
          </DialogContentText>

          <DialogTitle>Products and Services Disclaimer</DialogTitle>
          <DialogContentText>
            Please note that none of the information contained in this website
            should be viewed as a formal offer to sell or as a direct
            solicitation to purchase any of our products or services, nor should
            it be considered advice. Rather, the information on our products and
            services is provided to you so that you can learn what Foodnome can
            offer. We may make improvements and/or changes in the products,
            services and/or programs described on this site at any time without
            notice. Information on the website may include references to
            products or services not offered in your state or country or not
            available for purchase over the Internet in your state or country.
            Variations in state law may exist, and any statements that are
            general in nature are subject to change based on such variations.
            Availability of products or services may be dependent upon state
            regulations.
          </DialogContentText>

          <DialogTitle>International Users</DialogTitle>
          <DialogContentText>
            These Terms and any operating rules for this website established by
            Foodnome constitute the entire agreement of the parties with respect
            to the subject matter hereof, and supersede all previous written or
            oral agreements between the parties with respect to such subject
            matter. The provisions of these terms are for the benefit of
            Foodnome, its parent, subsidiaries, other affiliates and its third
            party content providers and licensors and each shall have the right
            to assert and enforce such provisions directly or on its own behalf.
            This website is controlled and operated by Foodnome from offices
            within the United States of America where you submit to the
            exclusive jurisdiction and venue of the courts in the state of
            California. We make no representation that materials at this website
            are appropriate or available for use outside of the United States or
            that access to their content from all territories is legal. You may
            not use the website or export the website materials in violation of
            U.S. laws and regulations. If you access this website from locations
            outside of the United States, you are responsible for compliance
            with all local laws. These terms and conditions which you have
            agreed to by visiting this website must be governed by the laws of
            the state of California, without giving effect to its conflict of
            laws provision.
          </DialogContentText>

          <DialogTitle>Ordering Products and Services</DialogTitle>
          <DialogContentText>
            You must be 18 years or older, and have a valid credit card, with
            full authority to use it, to submit an order for products or
            services through any of Foodnome websites. If you are a minor, you
            must have your parent or guardian read and agree to this Agreement
            prior to you using the Website. Persons under the age of 13 are not
            permitted to register for the Foodnome website or use the Foodnome
            website services. All ordering is performed online. You will
            typically be billed directly by Foodnome for your orders, and
            "Foodnome" will be the name that appears on your payment records,
            but Foodnome shall not in any manner be considered the seller of the
            food. On occasion, credit card information will be provided to the
            Restaurants, and in such case, the Restaurant will bill you
            directly. You will be notified at the time of purchase if the
            Restaurant will be billing you directly. In such case, you hereby
            authorize Foodnome to transfer your credit card information to the
            Restaurant for processing.
          </DialogContentText>

          <DialogTitle>Prices and Availability</DialogTitle>
          <DialogContentText>
            All prices listed on Foodnome websites are subject to change. In the
            event a product or service is listed at an incorrect price or with
            incorrect information due to typographical error or error in pricing
            or product information received from our suppliers, Foodnome shall
            have the right, prior to the acceptance of your order pursuant to
            our Order Acceptance Policy described below, to refuse or cancel any
            such orders whether or not the order has been confirmed and your
            credit card account charged. If your credit card account has already
            been charged for the purchase and your order is canceled, Foodnome
            shall immediately issue a credit to your credit card account in the
            amount of the charge. The availability of products or services and
            other items on each of Foodnome websites may change at any time,
            without notice.
          </DialogContentText>

          <DialogTitle>Terms of Purchase</DialogTitle>
          <DialogContentText>
            Payment is due at the time of order. You agree to pay all fees and
            charges incurred in connection with your purchases including any
            sales taxes, surcharges and any delivery fees for the delivery
            service you select. The final charges for your order may be
            different than those stated on the website. Foodnome does not assume
            any responsibility or liability for the actions, products, and
            content of any third parties related to the creation or delivery of
            your order. Foodnome may require additional verification or
            information before accepting any order. By selecting to pay via
            credit card as a method of payment, you agree that you must be
            authorized to use the credit card presented as a method of payment.
            Prior to the purchase of any goods or services on our website, you
            must provide us with a valid credit card number information and
            associated payment information, including, but not limited to, the
            following: (i) your name as it appears on the card, (ii) your credit
            card number, (iii) the credit card type, (iv) the date of expiration
            and (v) any activation numbers or codes needed to charge your card.
            If Foodnome does not receive payment from your credit card issuer or
            its agent, you agree to pay all amounts due upon demand by Foodnome
            or its agents. The final charges on your credit card may be
            different than those stated on the website. Each customer shall be
            solely responsible for all sales taxes, or other taxes, customs,
            import/export charges, or similar governmental charges, if any.
            Foodnome does not collect sales or use taxes in all states. For
            states imposing sales or use taxes, your purchase is subject to use
            tax unless it is specifically exempt from taxation. Your purchase is
            not exempt merely because it is made over the Internet or by other
            remote means. Many states require purchasers to file a sales/use tax
            return at the end of the year reporting all of the taxable purchases
            that were not taxed and to pay tax on those purchases. Details of
            how to file these returns may be found at the websites of your
            respective taxing authorities. Without limiting other remedies,
            Foodnome reserves the right to charge a late fee on all past due
            payments equivalent to the lesser of one and a half percent (1.5%)
            per month on the unpaid balance or the highest rate allowed by law.
            You will pay for all collection costs, attorneys fees, and court
            costs incurred in the collection of past due amounts.
          </DialogContentText>

          <DialogTitle>Order Acceptance Policy</DialogTitle>
          <DialogContentText>
            Your receipt of an electronic or other form of order confirmation
            does not signify Foodnome acceptance of your order, nor does it
            constitute confirmation of Foodnome offer to sell. Foodnome reserves
            the right at any time after receipt of your order to accept or
            decline your order for any reason. Foodnome reserves the right at
            any time after receipt of your order, without prior notice to you,
            to supply less than the quantity you ordered of any item. Foodnome
            may require additional verifications or information before accepting
            any order. Your order is not accepted until Foodnome sends you a
            receipt and/or pick-up information for the order (or the accepted
            portion thereof). Notwithstanding the foregoing, you agree that, if
            Foodnome cancels all or a portion of your order or if Foodnome
            provides you less than the quantity you ordered, your sole and
            exclusive remedy is either (a) Foodnome will issue a credit to your
            credit card account in the amount charged for the cancelled portion
            or the quantity not provided (if your credit card has already been
            charged for the order) or (b) Foodnome will not charge your credit
            card for the cancelled portion of the order or the quantity not
            provided.
          </DialogContentText>

          <DialogTitle>Questions and Suggestions</DialogTitle>
          <DialogContentText>
            If you have questions or suggestions, please contact us at{' '}
            <a href="mailto:info@foodnome.com" style={{ color: 'black' }}>
              info@foodnome.com
            </a>
            .
            <span className="mt-3">
              <span>
                This agreement to which you consent constitutes the entire
                agreement between you and Foodnome and its affiliated companies
                with respect to your use of our website.
              </span>
            </span>
          </DialogContentText>

          <DialogTitle>Funds/Refunds Policy</DialogTitle>
          <DialogContentText>
            Once a reservation has been made a hold will be placed on the
            Guests' account equal to the price of the reservation. These funds
            will be held in escrow until 3 days after the date of the event.
          </DialogContentText>
          <DialogContentText>
            Once a reservation is made guests will have 3 days with which to
            contact foodnome at{' '}
            <a href="mailto:info@foodnome.com" style={{ color: 'black' }}>
              info@foodnome.com
            </a>
            . After 3 days have passed funds will be released to the event's
            associated host.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Layout>
  );
}

TermsOfService.propTypes = {
  history: PropTypes.object
};

export default TermsOfService;
