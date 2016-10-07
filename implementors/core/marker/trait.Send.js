(function() {var implementors = {};
implementors["libc"] = [];implementors["atom"] = ["impl&lt;P&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='atom/struct.Atom.html' title='atom::Atom'>Atom</a>&lt;P&gt; <span class='where'>where P: <a class='trait' href='atom/trait.IntoRawPtr.html' title='atom::IntoRawPtr'>IntoRawPtr</a> + <a class='trait' href='atom/trait.FromRawPtr.html' title='atom::FromRawPtr'>FromRawPtr</a></span>",];implementors["pulse"] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='pulse/struct.Pulse.html' title='pulse::Pulse'>Pulse</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='pulse/struct.Signal.html' title='pulse::Signal'>Signal</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()