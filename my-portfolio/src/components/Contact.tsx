import type {ReactNode}from "react"
import{profile}from"../data/portfolio"
import{FaEnvelope,FaGithub}from "react-icons/fa";





export default function Contact(){

    const links:{label: string;icon:ReactNode;href:string}[] = [
         { label: 'GitHub', icon: '🐙', href: profile.links.github },
        { label: 'Email', icon: '✉️', href: `mailto:${profile.links.email}` },
        { label: 'Twitter / X', icon: '🐦', href: profile.links.twitter ?? "#"},
    ]
    
    return(
        <section className="section " id ="contact">
            <div className="container">
                <div contact-inner>
                    <h2 className="section-title">
                        <span>Contact</span>
                    </h2>
                    <p className="section-sub">連絡先</p>

                    <p className="contact-desc">
                        連絡先はこちらになります。
                    </p>

                    <div className="contact-links">
                        {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="contact-link-item"
                            target={link.href.startsWith('mailto') ? 
                                undefined : '_blank'}
                            rel="noreferrer"
                            >
                            <span className="contact-link-icon">{link.icon}
                                {link.icon}
                            </span>
                                {link.label}
                            </a>
                         ))}
                    </div>
                </div>
            </div>
        </section>
    )
}