import { SITE_NAME } from "@/lib/seo-constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faMedium, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function AuthorCard() {
  return (
    <aside
      className="mb-8 rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm ring-1 ring-slate-100/80"
      aria-label="About the author"
    >
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg">
          <span className="text-2xl font-bold">{SITE_NAME.charAt(0)}</span>
        </div>

        {/* Author Info */}
        <div className="flex-1">
          <h3 className="text-lg font-bold text-secondary">{SITE_NAME}</h3>
          <p className="mt-1 text-sm text-textMuted">
            Editorial Team
          </p>
          <p className="mt-2 text-sm leading-relaxed text-textDark">
            Expert insights on scholarship programs, interview evaluation, and educational assessment strategies. Helping institutions make fairer, data-driven decisions.
          </p>

          {/* Social Links */}
          <div className="mt-3 flex gap-2">
            <a
              href="https://medium.com/@fragmentswebsite"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-black hover:text-white"
              aria-label="Medium"
            >
              <FontAwesomeIcon icon={faMedium} className="h-4 w-4" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61590392447978"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-blue-600 hover:text-white"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/fragmentswebsite/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-pink-600 hover:text-white"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} className="h-4 w-4" />
            </a>
            <a
              href="https://x.com/fragmenttrail"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-black hover:text-white"
              aria-label="X (Twitter)"
            >
              <FontAwesomeIcon icon={faTwitter} className="h-4 w-4" />
            </a>
            <a
              href="tel:+15075135675"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-green-600 hover:text-white"
              aria-label="Phone"
            >
              <span className="text-xs font-bold">📞</span>
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
