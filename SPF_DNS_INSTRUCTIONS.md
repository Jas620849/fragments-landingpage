# SPF Record DNS Configuration Instructions

## What is SPF?

SPF (Sender Policy Framework) is a DNS record that helps prevent email spoofing by specifying which mail servers are authorized to send emails on behalf of your domain. This improves email deliverability and protects your domain from being used for spam.

## Current Status

According to the SEO audit, your domain `fragmenttrails.com` does not have an SPF record configured.

## How to Add an SPF Record

### Step 1: Log into your DNS provider

Go to your domain registrar or DNS hosting provider (e.g., GoDaddy, Namecheap, Cloudflare, AWS Route 53, Google Cloud DNS).

### Step 2: Create a new TXT record

Add a new TXT record with the following values:

**Name/Host:** `@` (or leave blank for root domain)

**Type:** `TXT`

**Value/Content:** 
```
v=spf1 include:_spf.google.com ~all
```

### Step 3: Customize for your email provider

If you use a different email service, replace `include:_spf.google.com` with the appropriate SPF include:

- **Google Workspace/Gmail:** `include:_spf.google.com`
- **Microsoft 365/Outlook:** `include:spf.protection.outlook.com`
- **Mailchimp:** `include:servers.mcsv.net`
- **SendGrid:** `include:sendgrid.net`

**Example for multiple services:**
```
v=spf1 include:_spf.google.com include:sendgrid.net ~all
```

### Step 4: Save and wait for propagation

DNS changes can take anywhere from a few minutes to 48 hours to propagate worldwide.

### Step 5: Verify your SPF record

After 24-48 hours, verify your SPF record using online tools:
- https://mxtoolbox.com/spf.aspx
- https://www.kitterman.com/spf/validate.html
- https://www.dmarcanalyzer.com/spf/checker/

## SPF Record Syntax Explanation

- `v=spf1` - SPF version
- `include:_spf.google.com` - Authorize Google's mail servers
- `~all` - Soft fail: emails from unauthorized servers may be marked as spam but not rejected
- `-all` - Hard fail: emails from unauthorized servers are rejected (stricter)

## Important Notes

1. **Only one SPF record per domain** - If you already have an SPF record, edit it instead of creating a new one
2. **Don't exceed 10 DNS lookups** - SPF has a 10-lookup limit
3. **Test before going live** - Use SPF record validators to check syntax
4. **Monitor email deliverability** - After adding SPF, monitor your email delivery rates

## Recommended SPF Record for Fragments

Based on common email providers, here's a recommended starting point:

```
v=spf1 include:_spf.google.com include:sendgrid.net ~all
```

Adjust the includes based on your actual email service providers.

## Additional Resources

- [SPF Record Syntax](https://tools.ietf.org/html/rfc7208)
- [Google Workspace SPF Setup](https://support.google.com/a/answer/33786)
- [Microsoft 365 SPF Setup](https://docs.microsoft.com/en-us/microsoft-365/admin/setup/domains-faq)

## After Implementation

Once you've added the SPF record, you should also consider:
1. Setting up DKIM (DomainKeys Identified Mail)
2. Setting up DMARC (Domain-based Message Authentication, Reporting, and Conformance) - **You already have DMARC configured!**

Your current DMARC record is:
```
v=DMARC1; p=reject; adkim=r; aspf=r; rua=mailto:dmarc_rua@onsecureserver.net;
```

This is a good configuration. Adding SPF will complete your email authentication setup.
