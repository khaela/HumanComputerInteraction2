const items = [
  [
    "Icon-only navigation",
    "Explore the navigation of this app.",
    "bad",
    "Discoverability",
    "Unfamiliar icons without labels make navigation harder. Minimalism should not sacrifice understanding.",
    "<h3>Discover</h3><div class=\"tiles\"><span>◈</span><span>⊙</span><span>≋</span><span>◫</span><span>⌬</span></div><div class=\"skeleton\"></div><div class=\"skeleton short\"></div>"
  ],
  [
    "Registration form",
    "You only need a basic account to browse articles.",
    "bad",
    "Efficiency and privacy",
    "Unnecessary fields add friction and collect more personal information than the task requires.",
    "<h3>Create your account</h3><div class=\"fields\"><span>Full name *</span><span>Email address *</span><span>Password *</span><span>Home address *</span><span>Monthly income *</span><span>Marital status *</span></div><div class=\"mockbutton\">Create account</div>"
  ],
  [
    "Password creation",
    "Observe the screen while a new password is being entered.",
    "good",
    "Real-time feedback",
    "Immediate feedback helps users meet requirements before submitting.",
    "<h3>Create a password</h3><div class=\"field\">••••••••••</div><div class=\"checks\">✓ At least 8 characters<br>✓ One uppercase letter<br>✓ One number<br><span>○ One special character</span></div><div class=\"mockbutton\">Continue</div>"
  ],
  [
    "Pastel interface",
    "Imagine checking your balance on a phone.",
    "bad",
    "Accessibility and contrast",
    "Low contrast reduces readability, even when the interface looks attractive.",
    "<div class=\"pastel\"><p>Your daily balance</p><h2>₱ 12,450.00</h2><p>Recent activity · View transaction details</p><div>View details</div></div>"
  ],
  [
    "Account deletion",
    "A user chooses to permanently delete their account.",
    "good",
    "Error prevention",
    "Confirmation protects users from accidental irreversible actions.",
    "<div class=\"dialog\"><h3>Delete your account?</h3><p>This action is permanent. Your data cannot be recovered.</p><div class=\"mockrow\"><span class=\"outline\">Cancel</span><span class=\"danger\">Delete account</span></div></div>"
  ],
  [
    "Form validation",
    "Review the contact information before continuing.",
    "bad",
    "Accessibility",
    "Color alone is not sufficient; clear text or meaningful icons should explain the error.",
    "<h3>Contact information</h3><div class=\"field invalid\">Email: alex@</div><div class=\"field valid\">Phone: 09123456789</div><div class=\"field invalid\">ZIP code: 1A</div><div class=\"mockbutton\">Continue</div>"
  ],
  [
    "Loading screen",
    "A news feed is retrieving its content.",
    "good",
    "Visibility of system status",
    "Skeleton screens communicate loading and preview the layout when used appropriately.",
    "<h3>Latest stories</h3><div class=\"skeleton hero\"></div><div class=\"skeleton\"></div><div class=\"skeleton short\"></div><div class=\"skeleton\"></div><small>Loading stories…</small>"
  ],
  [
    "Subscription offer",
    "A user opens an article and sees this offer.",
    "bad",
    "Ethical design",
    "A hidden or obscured decline option undermines informed choice.",
    "<div class=\"offer\"><h3>Unlock Premium</h3><p>Get unlimited access to exclusive features.</p><div class=\"mockbutton\">Subscribe now</div><span class=\"hidden-decline\">No thanks</span></div>"
  ],
  [
    "Submit button",
    "A user has entered the visible information and wants to register.",
    "bad",
    "Feedback and error recovery",
    "Users need to know what prevents submission and how to resolve it.",
    "<h3>Sign up</h3><div class=\"field\">Full name: Alex</div><div class=\"field\">Email: alex@example.com</div><div class=\"field\">Password: ••••••••</div><div class=\"mockbutton disabled\">Submit</div>"
  ],
  [
    "Checkout process",
    "A customer is completing an online purchase.",
    "good",
    "Cognitive load and system status",
    "A clear, manageable sequence can reduce complexity and show progress.",
    "<div class=\"steps\"><span>✓ Shipping</span><strong>2 Payment</strong><span>3 Review</span></div><h3>Payment details</h3><div class=\"field\">Card number</div><div class=\"mockrow\"><div class=\"field\">Expiration date</div><div class=\"field\">Security code</div></div><div class=\"mockbutton\">Continue to review</div>"
  ]
];
