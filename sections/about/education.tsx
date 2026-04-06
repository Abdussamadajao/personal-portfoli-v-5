import React from "react";

const Education = () => {
    return (
        <section className="mb-24" id="education">
            <h2
                className="text-foreground text-[22px] font-bold leading-tight tracking-[-0.015em] mb-8 uppercase"
            >
                03 / Education
            </h2>
            <div className="space-y-8">
                <div
                    className="flex flex-col gap-2 border-l-2 border-primary/30 pl-6"
                >
                    <p className="text-foreground text-lg font-bold">
                        BSc. Software Engineering
                    </p>
                    <p className="text-muted-foreground text-sm font-medium">
                        Al-Hikmah University, Ilorin, Nigeria · Nov 2021 – Sep 2025
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Education;