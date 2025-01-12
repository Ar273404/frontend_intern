import React from "react";

const TeamCard = ({ name, designation, imageSrc, description }) => {
  return (
    <div className="flex bg-green-100 rounded-lg shadow-md p-4 mb-6">
      {/* Image Section */}
      <div className="flex-shrink-0">
        <img
          src={imageSrc}
          alt={`${name} - Team Member`}
          className="w-24 h-24 rounded-full object-cover"
        />
      </div>
      {/* Text Section */}
      <div className="ml-4">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-gray-600 font-medium mb-2">{designation}</p>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

const TeamMembers = () => {
  const teamData = [
    {
      name: "John Smith",
      designation: "Software Engineer",
      imageSrc: "https://randomuser.me/api/portraits/men/1.jpg",
      description:
        "John is a skilled software engineer with 5 years of experience in full-stack development.",
    },
    {
      name: "Elina Williams",
      designation: "Product Manager",
      imageSrc: "https://randomuser.me/api/portraits/men/2.jpg",
      description:
        "Elina is a dedicated product manager who has led multiple successful projects over the last decade.",
    },
    {
      name: "Alice Johnson",
      designation: "UX Designer",
      imageSrc: "https://randomuser.me/api/portraits/men/3.jpg",
      description:
        "Alice is a creative UX designer who specializes in crafting intuitive user experiences.",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mx-10 my-10">
      {/* Header for Parent Container */}
      <div className="text-xl font-bold mb-6">Team Members</div>
      <p>
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
        vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
        pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
        fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
        dui
      </p>
      {/* All Cards in One Parent Container */}
      <div className="space-y-4">
        {teamData.map((member, index) => (
          <TeamCard
            key={index}
            name={member.name}
            designation={member.designation}
            imageSrc={member.imageSrc}
            description={member.description}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
