export default function BoardTable() {
  return (
    <div className='bg-white pb-4 rounded-md w-full'>
      <div className='overflow-x-auto mt-6'>
        <table className='table-auto border-collapse w-full'>
          <thead>
            <tr className='rounded-lg text-sm font-medium text-gray-700 text-left'>
              <th className='px-4 py-2 bg-gray-200 '>Title</th>
              <th className='px-4 py-2 bg-gray-200 '>Author</th>
              <th className='px-4 py-2 bg-gray-200 '>Views</th>
            </tr>
          </thead>
          <tbody className='text-sm font-normal text-gray-700'>
            <tr className='hover:bg-gray-100 border-b border-gray-200 py-10'>
              <td className='px-4 py-4'>Intro to CSS</td>
              <td className='px-4 py-4'>Adam</td>
              <td className='px-4 py-4'>858</td>
            </tr>
            <tr className='hover:bg-gray-100 border-b border-gray-200 py-4'>
              <td className='px-4 py-4 flex items-center'>
                A Long and Winding Tour of the History of UI Frameworks and
                Tools and the Impact on Design
              </td>
              <td className='px-4 py-4'>Adam</td>
              <td className='px-4 py-4'>112</td>
            </tr>
            <tr className='hover:bg-gray-100  border-gray-200'>
              <td className='px-4 py-4'>Intro to JavaScript</td>
              <td className='px-4 py-4'>Chris</td>
              <td className='px-4 py-4'>1,280</td>
            </tr>
            <tr className='hover:bg-gray-100  border-gray-200'>
              <td className='px-4 py-4'>Intro to JavaScript</td>
              <td className='px-4 py-4'>Chris</td>
              <td className='px-4 py-4'>1,280</td>
            </tr>
            <tr className='hover:bg-gray-100  border-gray-200'>
              <td className='px-4 py-4'>Intro to JavaScript</td>
              <td className='px-4 py-4'>Chris</td>
              <td className='px-4 py-4'>1,280</td>
            </tr>
            <tr className='hover:bg-gray-100  border-gray-200'>
              <td className='px-4 py-4'>Intro to JavaScript</td>
              <td className='px-4 py-4'>Chris</td>
              <td className='px-4 py-4'>1,280</td>
            </tr>
            <tr className='hover:bg-gray-100  border-gray-200'>
              <td className='px-4 py-4'>Intro to JavaScript</td>
              <td className='px-4 py-4'>Chris</td>
              <td className='px-4 py-4'>1,280</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
