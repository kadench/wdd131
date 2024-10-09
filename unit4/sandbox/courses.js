const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: 
    [
        {
            sectionNum: 1,
            roomNum: 'STC 353',
            enrolled: 26,
            days:'TTh',
            instructor: 'Bro T',
        },

        {
            sectionNum: 2,
            roomNum: 'STC 347',
            enrolled: 28,
            days: 'TTh',
            instructor: 'Sis A',
        },
    ],
    EnrollStudent: function() 
        {
        console.log(sections)
        const section = this.sections.find((section) => section.sectionNum === sectionNum);
        if (section) {
            section.enrolled ++;
        }
        }
  };

//   keys don't have to have quotes around them unless there is a multi-worded key (not recommended)
function MakeLists(aCourse) {
    const courseNameList = [];
    const sectionNumberList = [];

    aCourse.sections.forEach(section => {
        const courseNameListItem = section.roomNum;
        const sectionNumberListItem = section.sectionNum;
        courseNameList.push(courseNameListItem);
        sectionNumberList.push(sectionNumberListItem);
    });
    return {courseNameListFull: courseNameList, sectionNumberListFull: sectionNumberList}
}

const listObjects = MakeLists(aCourse);
const courseNameList = listObjects.courseNameListFull;
const sectionNumberList = listObjects.sectionNumberListFull;

console.log(courseNameList);

function SetCourseInfo() {
    const courseNameEl = document.querySelector("");

}

function RenderSections(sections) {
    const sectionListEl = document.querySelector("#sections");
    const html = sections.map(SectionsTemplate);
    sectionListEl.innerHTML = html.join("");
}

const enrollStudentButton = document.querySelector("#enrollStudent");
enrollStudentButton.addEventListener("click", function() {
    const sectionNumber = document.querySelector("#sectionNumber").value;
    });
